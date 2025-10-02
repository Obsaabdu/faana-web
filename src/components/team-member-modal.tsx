"use client";

import {
  X,
  Mail,
  Linkedin,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Award,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Publication {
  title: string;
  journal: string;
  year: string;
  url: string;
}

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  email: string;
  linkedin: string;
  expertise: string[];
  education: Education[];
  publications: Publication[];
  languages: string[];
  barAdmissions: string[];
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeamMemberModal({
  member,
  isOpen,
  onClose,
}: TeamMemberModalProps) {
  if (!member) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {member.name}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto md:mx-0">
              <span className="text-4xl font-bold text-primary">
                {member.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {member.position}
              </h3>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Award className="h-5 w-5" />
              Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </h4>
            <div className="space-y-3">
              {member.education.map((edu) => (
                <div
                  key={`${edu.institution}-${edu.degree}`}
                  className="border-l-2 border-primary/20 pl-4">
                  <div className="font-medium">{edu.degree}</div>
                  <div className="text-sm text-muted-foreground">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications Section */}
          {member.publications.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Publications
              </h4>
              <div className="space-y-3">
                {member.publications.map((pub) => (
                  <div
                    key={pub.title}
                    className="border rounded-lg p-4">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium flex items-center gap-2 mb-2">
                      {pub.title}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <div className="text-sm text-muted-foreground">
                      {pub.journal}, {pub.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.languages.map((language) => (
                <span
                  key={language}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Bar Admissions Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Bar Admissions</h4>
            <div className="flex flex-wrap gap-2">
              {member.barAdmissions.map((admission) => (
                <span
                  key={admission}
                  className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full border border-primary/20">
                  {admission}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
