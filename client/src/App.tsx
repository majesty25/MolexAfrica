import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Layout } from "@/components/layout/layout";

// Pages
import Home from "@/pages/home.tsx";
import About from "@/pages/about.tsx";
import Programs from "@/pages/programs.tsx";
import ProgramDetail from "@/pages/program-detail.tsx";
import Events from "@/pages/events.tsx";
import EventDetail from "@/pages/event-detail.tsx";
import Executives from "@/pages/executives.tsx";
import Board from "@/pages/board.tsx";
import AdvisoryCouncil from "@/pages/advisory-council.tsx";
import Organogram from "@/pages/organogram.tsx";
import Gallery from "@/pages/gallery.tsx";
import News from "@/pages/news.tsx";
import NewsDetail from "@/pages/news-detail.tsx";
import Projects from "@/pages/projects.tsx";
import ProjectDetail from "@/pages/project-detail.tsx";
import JoinUs from "@/pages/join-us.tsx";
import Volunteer from "@/pages/volunteer.tsx";
import Partner from "@/pages/partner.tsx";
import Donate from "@/pages/donate.tsx";
import Contact from "@/pages/contact.tsx";
import SuccessStories from "@/pages/success-stories.tsx";
import Admin from "@/pages/admin.tsx";
import NotFound from "@/pages/not-found.tsx";

// New Program Category Pages (assuming these exist)
import EducationPrograms from "@/pages/programs/education";
import HealthcarePrograms from "@/pages/programs/healthcare";
import DevelopmentPrograms from "@/pages/programs/sheroes";
import KiddieStemPrograms from "@/pages/programs/kiddie-stem";

function Router() {
  return (
    <Switch>
      {/* Admin route without main layout */}
      <Route path="/admin" component={Admin} />

      {/* All other routes with main layout */}
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/programs" component={Programs} />
            <Route path="/programs/sheroes/lk" component={EducationPrograms} />
            <Route path="/programs/healthcare" component={HealthcarePrograms} />
            <Route path="/programs/kiddie-stem" component={KiddieStemPrograms} />
            {/* <Route path="/programs/:id" component={DevelopmentPrograms} /> */}
            <Route path="/programs/:id" component={ProgramDetail} />
            <Route path="/events" component={Events} />
            <Route path="/events/:id" component={EventDetail} />
            <Route path="/executives" component={Executives} />
            <Route path="/board" component={Board} />
            <Route path="/advisory-council" component={AdvisoryCouncil} />
            <Route path="/organogram" component={Organogram} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/news" component={News} />
            <Route path="/news/:id" component={NewsDetail} />
            <Route path="/projects" component={Projects} />
            <Route path="/projects/:id" component={ProjectDetail} />
            <Route path="/join-us" component={JoinUs} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/partner" component={Partner} />
            <Route path="/donate" component={Donate} />
            <Route path="/contact" component={Contact} />
            <Route path="/success-stories" component={SuccessStories} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="molex-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;