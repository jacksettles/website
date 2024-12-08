import MUIcon from "@/components/icons/MUIcon";
import NortheasternIcon from "@/components/icons/NortheasternIcon";

export interface EducationField {
    university: string;
    degree: string;
    duration: string;
    year: string;
    logo: React.ComponentType<{ className?: string }>;
}

export const educations: EducationField[] = [
    {
        university: "Northeastern University, Boston",
        degree: "Master of Science in Computer Science",
        duration: "Jan 2023 - May 2025",
        year: "2023-2025",
        logo: NortheasternIcon
    },
    {
        university: "Mahindra University, India",
        degree: "Bachelor of Technology, Computer Science and Engineering",
        duration: "Aug 2016 - Sep 2020",
        year: "2016-2020",
        logo: MUIcon
    },
];
    
    