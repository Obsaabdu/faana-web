"use client";

export function AboutAnimations() {
  return (
    <style
      jsx
      global>{`
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slide-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
      }

      .animate-slide-up {
        animation: slide-up 0.8s ease-out forwards;
        opacity: 0;
      }

      .delay-200 {
        animation-delay: 0.2s;
      }

      .delay-400 {
        animation-delay: 0.4s;
      }

      .delay-1000 {
        animation-delay: 1s;
      }

      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
  );
}






