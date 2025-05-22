"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaTable, FaIcons, FaExclamationTriangle, } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
    const pathname = usePathname();
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);

    const linkClasses = (href) =>
        `flex items-center cursor-pointer transition-colors duration-200 ${pathname === href ? "text-orange-500 font-semibold" : "text-gray-400"
        }`;

    const subLinkClasses = (href) =>
        `block ml-6 mt-2 cursor-pointer transition-colors duration-200 ${pathname === href ? "text-orange-500 font-semibold" : "text-gray-400"
        }`;

    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-[#111] border-r border-yellow-500 p-4">
            <div className="text-orange-500 font-bold text-lg mb-6">
                Coin<span className="text-white">eX</span>
            </div>

            <nav className="space-y-4 text-sm">
                {/* Dashboard */}
                <Link href="/dashboard" className={linkClasses("/dashboard")}>
                    <FaHome className="mr-2" />
                    Dashboard
                </Link>

                {/* User Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between text-gray-400 cursor-pointer"
                        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    >
                        <div className="flex items-center">
                            <FaUser className="mr-2" />
                            User
                        </div>
                        <MdKeyboardArrowDown
                            className={`transition-transform ${isUserDropdownOpen ? "rotate-180" : ""
                                }`}
                        />
                    </div>
                    {isUserDropdownOpen && (
                        <ul className="space-y-1">
                            <li>
                                <Link href="/userprofile" className={subLinkClasses("/userprofile")}>
                                    User Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/userlist" className={subLinkClasses("/userlist")}>
                                    User List
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Authentication Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between text-gray-400 cursor-pointer"
                        onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
                    >
                        <div className="flex items-center">
                            <RiShieldUserLine className="mr-2" />
                            Authentication
                        </div>
                        <MdKeyboardArrowDown
                            className={`transition-transform ${isAuthDropdownOpen ? "rotate-180" : ""
                                }`}
                        />
                    </div>
                    {isAuthDropdownOpen && (
                        <ul className="space-y-1">
                            <li>
                                <Link href="/signin" className={subLinkClasses("/signin")}>
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link href="/signup" className={subLinkClasses("/signup")}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Other Links */}
                <Link href="/table" className={linkClasses("/table")}>
                    <FaTable className="mr-2" />
                    Table
                </Link>

                <Link href="/icons" className={linkClasses("/icons")}>
                    <FaIcons className="mr-2" />
                    Icons
                </Link>

                <Link href="/error" className={linkClasses("/error")}>
                    <FaExclamationTriangle className="mr-2" />
                    Error
                </Link>
            </nav>

            {/* Bottom Box */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#222] p-4 rounded-md">
                <Image src="/coin.png" alt="coin" width={48} height={48} className="w-12 mx-auto mb-2" />
                <p className="text-center text-sm text-gray-400 mb-2">
                    Be more secure with Pro Features
                </p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
                    Upgrade Now!
                </button>
            </div>
        </aside>
    );
}
