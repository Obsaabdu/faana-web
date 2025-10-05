export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export class AuthService {
  static getCurrentUser(): User | null {
    // Mock implementation - replace with actual auth logic
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('admin-user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  static login(email: string, password: string): Promise<User> {
    // Mock implementation - replace with actual auth logic
    return new Promise((resolve) => {
      const mockUser: User = {
        id: '1',
        email,
        name: 'Admin User',
        role: 'admin'
      };
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin-user', JSON.stringify(mockUser));
      }
      
      resolve(mockUser);
    });
  }

  static logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin-user');
    }
  }

  static isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }
}


