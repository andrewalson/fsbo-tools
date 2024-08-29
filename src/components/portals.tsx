import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart2, Map, Search, BookOpen, Printer } from "lucide-react"

export default function Portals() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-7xl w-full mx-auto p-6 space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
                    FSBO Toolkit
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 text-center mb-6">
                    Access powerful tools to sell your home
                </p>

                <div className="flex justify-center mb-12">
                    <Link href="/dashboard">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white py-6 px-12 text-xl rounded-full">
                            Enter Dashboard
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center mb-12">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                            className="pl-10 py-6 text-lg w-full"
                            placeholder="Enter your home address"
                        />
                    </div>
                    <Button className="ml-4 bg-orange-500 hover:bg-orange-600 text-white py-6 px-8 text-lg">
                        Get Started
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="flex flex-col items-center p-6">
                        <h2 className="text-xl font-bold mb-2">Comparative Analysis</h2>
                        <p className="text-gray-500 text-center mb-6 text-sm">Identify listing and target sale prices</p>
                        <BarChart2 className="w-16 h-16 text-orange-500 mb-6" />
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                            Start Analysis
                        </Button>
                    </Card>

                    <Card className="flex flex-col items-center p-6">
                        <h2 className="text-xl font-bold mb-2">Interactive Roadmap</h2>
                        <p className="text-gray-500 text-center mb-6 text-sm">Navigate your home selling journey</p>
                        <Map className="w-16 h-16 text-orange-500 mb-6" />
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                            View Roadmap
                        </Button>
                    </Card>

                    <Card className="flex flex-col items-center p-6">
                        <h2 className="text-xl font-bold mb-2">Resource Library</h2>
                        <p className="text-gray-500 text-center mb-6 text-sm">Forms, documents, guides & checklists</p>
                        <BookOpen className="w-16 h-16 text-orange-500 mb-6" />
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                            Browse Resources
                        </Button>
                    </Card>

                    <Card className="flex flex-col items-center p-6">
                        <h2 className="text-xl font-bold mb-2">Material Generators</h2>
                        <p className="text-gray-500 text-center mb-6 text-sm">Custom digital & physical advertising</p>
                        <Printer className="w-16 h-16 text-orange-500 mb-6" />
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                            Create Materials
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    )
}