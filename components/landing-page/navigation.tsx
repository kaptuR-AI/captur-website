"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Identity Verification",
        href: "/",
        description:
          "Real-time KYC verification and fraud detection during customer onboarding and registration for financial institutions.",
      },
      {
        title: "Transaction Monitoring",
        href: "/",
        description:
          "AI-powered system that detects and prevents fraudulent transactions in real-time, protecting both users and financial institutions.",
      },
      {
        title: "Authentication Score",
        href: "/",
        description:
          "Dynamic trust scoring system that evaluates user authenticity based on multiple verification factors and behavioral patterns.",
      },
      {
        title: "Media Analysis",
        href: "/",
        description: "Advanced deepfake detection for images, videos, and audio content to maintain media integrity and trust.",
      },
      {
        title: "Verification Methods",
        href: "/",
        description:
          "Multi-layered authentication options including biometrics, document verification, and behavioral analysis for secure access.",
      },
      {
        title: "Risk Assessment",
        href: "/",
        description:
          "Real-time risk scoring and fraud prevention system that analyzes user behavior, transaction patterns, and authentication factors.",
      },
]

const communityitems: { title: string; href: string; description: string }[] = [
    {
        title: "Blogs",
        href: "/",
        description:
          "Discover our content to know more about us.",
      },
      {
        title: "Events",
        href: "/",
        description:
          "Discover our Upcoming webinars.",
      },
      {
        title: "Support",
        href: "/",
        description:
          "Get in touch if you need any help",
      }
]

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white">Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Captur AI
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Use AI to detect deepfakes. Captur is modal agnostic
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Image Authentication">
            Verify image authenticity and detect manipulations using advanced AI analysis.
            </ListItem>
            <ListItem href="/" title="Audio Authentication">
            Detect deepfakes and verify audio recordings with voice analysis technology.
            </ListItem>
            <ListItem href="/" title="Text Detection">
            Identify AI-generated content and analyze writing patterns for authenticity.
            </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white">Use Cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white">Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {communityitems.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
