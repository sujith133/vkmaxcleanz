import { create } from 'zustand';

export type LocationId = 'Hyderabad' | 'Vishakapatnam';

export interface Leader {
    name: string;
    role: string;
    image: string;
    description: string;
    locations: LocationId[];
}

interface LocationState {
    location: LocationId;
    setLocation: (location: LocationId) => void;
}

export const LEADERS: Leader[] = [
    {
        name: 'Enoch',
        role: 'MD',
        image: '/images/Profile/enoch.webp',
        description:
            'Visionary leader with 14+ years of experience, Enoch has transformed VK Max Cleanz from a local start-up to a trusted multi-city home services brand. His relentless focus on quality and customer-first approach drives the company forward.',
        locations: ['Hyderabad', 'Vishakapatnam'],
    },
    {
        name: 'Edwin Kumar',
        role: 'CEO',
        image: '/images/Profile/edwin.webp',
        description:
            'Strategic business leader, Edwin Kumar oversees all operations in Hyderabad. His expertise in scaling businesses and building strong teams has been instrumental in establishing VK Max Cleanz as a market leader in the region.',
        locations: ['Hyderabad'],
    },
    {
        name: 'Laxmi',
        role: 'MD',
        image: '/images/Profile/laxmi.webp',
        description:
            'Operations powerhouse, Laxmi manages all day-to-day operations in Vizag. Her dedication to service excellence and client relationships ensures VK Max Cleanz consistently delivers outstanding results across the city.',
        locations: ['Vishakapatnam'],
    },
];

/** Returns the role a leader holds at a specific location */
export function getRoleAtLocation(leader: Leader, loc: LocationId): string {
    if (leader.name === 'Enoch') {
        return loc === 'Hyderabad' ? 'Managing Director' : 'Chief Executive Officer';
    }
    return leader.role === 'CEO' ? 'Chief Executive Officer' : 'Managing Director';
}

export const useLocationStore = create<LocationState>((set) => ({
    location: 'Hyderabad',
    setLocation: (location) => set({ location }),
}));
