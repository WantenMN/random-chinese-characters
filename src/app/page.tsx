import CharacterDisplay from "@/components/character-display";
import RefreshButton from "@/components/refresh-button";
import Settings from "@/components/settings";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <section className="mx-2 flex justify-between gap-4">
          <Settings />
          <RefreshButton />
        </section>
        <section className="flex justify-center">
          <CharacterDisplay />
        </section>
      </div>
    </main>
  );
}
