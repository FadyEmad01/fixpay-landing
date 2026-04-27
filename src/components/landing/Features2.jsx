import { useState } from "react";
import {
  Cloud,
  Cpu,
  Shield,
  ChevronRight,
  Triangle,
  Database,
  GitBranch,
  MessageSquare,
  Flame,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Features2() {
  const [feature, setFeature] = useState("seamless-integrations");

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-5xl gap-20 px-6 lg:grid-cols-2">
        <div className="relative flex items-center overflow-hidden rounded-3xl">
          <img
            className="w-full aspect-square object-cover"
            src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div>
          <div>
            <h2 className="text-balance font-serif text-4xl font-medium">
              Powerful Features for Modern Teams
            </h2>

            <p className="text-muted-foreground mb-6 mt-4 text-balance">
              Everything you need to build, connect, and scale your integrations
              effortlessly.
            </p>

            <Button
              variant="secondary"
              size="sm"
              asChild
              className="gap-1 pr-1.5"
            >
              <a href="#">
                Get started
                <ChevronRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-col *:w-full *:cursor-pointer">
            <button
              onClick={() => setFeature("seamless-integrations")}
              data-selected={feature === "seamless-integrations"}
              className="text-muted-foreground hover:text-foreground data-[selected=true]:text-foreground flex items-center gap-3 py-2 text-sm transition-colors"
            >
              <div className="flex size-4 items-center -space-x-2">
                <div className="size-3 shrink-0 rounded-full border border-current" />
                <div className="size-3 shrink-0 rounded-full border border-current" />
              </div>
              <span className="font-medium">Seamless Integrations</span>
            </button>

            <button
              onClick={() => setFeature("real-time-sync")}
              data-selected={feature === "real-time-sync"}
              className="text-muted-foreground hover:text-foreground data-[selected=true]:text-foreground flex items-center gap-3 py-2 text-sm transition-colors"
            >
              <Cloud className="size-4" />
              <span className="font-medium">Real-time Sync</span>
            </button>

            <button
              onClick={() => setFeature("developer-first")}
              data-selected={feature === "developer-first"}
              className="text-muted-foreground hover:text-foreground data-[selected=true]:text-foreground flex items-center gap-3 py-2 text-sm transition-colors"
            >
              <Cpu className="size-4" />
              <span className="font-medium">Developer-first</span>
            </button>

            <button
              onClick={() => setFeature("enterprise-ready")}
              data-selected={feature === "enterprise-ready"}
              className="text-muted-foreground hover:text-foreground data-[selected=true]:text-foreground flex items-center gap-3 py-2 text-sm transition-colors"
            >
              <Shield className="size-4" />
              <span className="font-medium">Enterprise-ready</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationsIllustration() {
  return (
    <div aria-hidden className="flex h-44 w-full flex-col justify-between pt-8">
      <div className="relative flex h-10 items-center gap-12 px-6">
        <div className="bg-border absolute inset-0 my-auto h-px" />

        <div className="bg-card ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <Triangle className="size-3.5 text-foreground" />
        </div>

        <div className="bg-card ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <MessageSquare className="size-3.5 text-foreground" />
        </div>
      </div>

      <div className="relative flex h-10 items-center justify-between gap-12 pl-16 pr-6">
        <div className="bg-border absolute inset-0 my-auto h-px" />

        <div className="bg-card ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <BadgeCheck className="size-3.5 text-foreground" />
        </div>

        <div className="bg-card ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <GitBranch className="size-3.5 text-foreground" />
        </div>
      </div>

      <div className="relative flex h-10 items-center gap-20 px-8">
        <div className="bg-border absolute inset-0 my-auto h-px" />

        <div className="bg-card ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <Database className="size-3.5 text-foreground" />
        </div>

        <div className="bg-card ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <Flame className="size-3.5 text-foreground" />
        </div>
      </div>
    </div>
  );
}

function RealTimeIllustration() {
  return (
    <div aria-hidden className="relative h-44 w-full translate-y-6">
      <div className="bg-foreground/15 absolute inset-y-0 left-1/2 w-px -translate-x-1/2" />

      <div className="border-border absolute left-1/2 top-6 aspect-square w-72 -translate-x-1/2 rounded-full border" />
      <div className="absolute left-1/2 top-6 aspect-square w-72 -translate-x-1/2 rounded-full border border-b-transparent border-l-transparent border-r-primary border-t-primary" />

      <div className="border-border absolute left-1/2 top-24 aspect-square w-56 -translate-x-1/2 rounded-full border" />
      <div className="absolute left-1/2 top-24 aspect-square w-56 -translate-x-1/2 rounded-full border border-b-transparent border-l-transparent border-r-lime-500 border-t-lime-500" />
    </div>
  );
}

function EnterpriseIllustration() {
  return (
    <div
      aria-hidden
      className="relative flex size-44 w-full items-center justify-center"
    >
      <Shield className="absolute inset-0 size-full stroke-[0.1px] opacity-15" />
      <Shield className="fill-card stroke-border size-32 stroke-[0.2px] drop-shadow-xl dark:fill-white/10" />
    </div>
  );
}

function DeveloperIllustration() {
  const activeBars = [4, 9, 13, 18, 23, 31];

  return (
    <div aria-hidden className="flex h-44 w-full justify-between pb-6 pt-12">
      {Array.from({ length: 32 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-full w-px bg-foreground/15",
            activeBars.includes(index) && "bg-primary",
          )}
        />
      ))}
    </div>
  );
}
