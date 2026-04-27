import { Download, Monitor, Smartphone, Tablet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Download2 = ({
  heading = "Download",
  description = "Choose your platform and start using our app right away. Available on all major devices and operating systems.",
  platforms = {
    ios: {
      title: "Mobile Phone",
      subtitle: "iOS",
      description: "Designed specifically for iOS devices.",
      url: "#",
    },
    android: {
      title: "Mobile Phone / Tablet",
      subtitle: "Android",
      description: "Optimized for Android ecosystem.",
      url: "#",
    },
  },
  className,
}) => {
  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance font-serif text-4xl font-medium">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-6 mt-4 text-balance">
            {description}
          </p>
        </div>

        {/* Download Options */}
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">

          {/* iOS */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
              <Smartphone className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {platforms.ios?.subtitle}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {platforms.ios?.description}
            </p>
            <a href={platforms.ios?.url} className="mx-auto block w-fit">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.png"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>

          {/* Android */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
              <Tablet className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {platforms.android?.subtitle}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {platforms.android?.description}
            </p>
            <a href={platforms.android?.url} className="mx-auto block w-fit">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.png"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Download2 }