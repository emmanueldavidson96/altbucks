'use client';

import { ApplicationCard } from './ApplicationCard';
import {ApplicationDetails} from "./ApplicationDetailsModal";

export function ApplicationsList() {
    return (
        <div className="min-h-[400px]">
            <div>
                <ApplicationCard />
            </div>
        <ApplicationDetails/>
        </div>
    );
}