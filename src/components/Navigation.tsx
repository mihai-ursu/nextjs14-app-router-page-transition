import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
    <div className="flex justify-between p-8">
      Logo
      <nav className="flex gap-4">
        <TransitionLink href="/">Home</TransitionLink>
        <TransitionLink href="/about">About</TransitionLink>
      </nav>
    </div>
  );
};

export default Navigation;
