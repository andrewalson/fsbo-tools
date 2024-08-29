'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, BarChart2, Map, Settings, LogOut } from "lucide-react"

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="bg-white w-64 min-h-screen flex flex-col shadow-md">
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-6">FSBO Toolkit</h2>
                    <nav className="space-y-2">
                        <Link href="/dashboard" className="flex items-center py-2 px-4 text-gray-700 bg-gray-200 rounded">
                            <Home className="mr-3 h-5 w-5" /> Dashboard
                        </Link>
                        <Link href="/dashboard/analysis" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                            <BarChart2 className="mr-3 h-5 w-5" /> Analysis
                        </Link>
                        <Link href="/dashboard/roadmap" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                            <Map className="mr-3 h-5 w-5" /> Roadmap
                        </Link>
                        <Link href="/dashboard/settings" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                            <Settings className="mr-3 h-5 w-5" /> Settings
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Link href="/">
                        <Button variant="outline" className="w-full flex items-center justify-center">
                            <LogOut className="mr-2 h-5 w-5" /> Logout
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <div className="max-w-7xl mx-auto">
                        <Button 
                            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-8 px-12 rounded-md transition-colors duration-300"
                        >
                            Onboard a home
                        </Button>
                    </div>
                </main>
            </div>
        </div>
    )
}