import { Route, Switch } from "wouter";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Doctrine from "./pages/Doctrine";
import Pillars from "./pages/Pillars";
import Archetypes from "./pages/Archetypes";
import LivingSystems from "./pages/LivingSystems";
import Access from "./pages/Access";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white flex flex-col">
      <Nav />
      <main className="flex-grow pt-24">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/doctrine" component={Doctrine} />
          <Route path="/pillars" component={Pillars} />
          <Route path="/archetypes" component={Archetypes} />
          <Route path="/living-systems" component={LivingSystems} />
          <Route path="/access" component={Access} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
      
      <footer className="border-t border-white/5 py-8 mt-20 text-center">
        <p className="font-serif text-[10px] tracking-[0.3em] text-white/30 uppercase">
          SIGNATUS • SCULPTUS • PERMANENS <br/>
          © {new Date().getFullYear()} The Agoge Method
        </p>
      </footer>
    </div>
  );
}

export default App;
