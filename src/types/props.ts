import type React from "react";

export interface AppRoute {
    title: string;
    path: string;
    element: React.ReactNode;
}