import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-background">
      <Container className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
          404
        </p>
        <h1 className="font-heading text-3xl text-textPrimary">
          Page not found.
        </h1>
        <Button href="/">Back to home</Button>
      </Container>
    </div>
  );
}
