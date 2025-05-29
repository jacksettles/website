import UGAIcon from "@/components/icons/UGAIcon";

export interface EducationField {
    university: string;
    degree: string;
    duration: string;
    year: string;
    logo: React.ComponentType<{ className?: string }>;
}

export const educations: EducationField[] = [
    {
        university: "University of Georgia, Athens, GA",
        degree: "Doctor of Philosophy in Artificial Intelligence",
        duration: "Jan 2025 - May 2025 (Incomplete)",
        year: "2025-2025",
        logo: UGAIcon
    },
    {
        university: "University of Georgia, Athens, GA",
        degree: "Master of Science in Artificial Intelligence",
        duration: "Aug 2022 - May 2025",
        year: "2022-2025",
        logo: UGAIcon
    },
    {
        university: "University of Georgia, Athens, GA",
        degree: "Bachelor of Arts in Philosophy & Cognitive Science; Minor in Linguistics",
        duration: "Aug 2017 - May 2021",
        year: "2017-2021",
        logo: UGAIcon
    },
];
    
    