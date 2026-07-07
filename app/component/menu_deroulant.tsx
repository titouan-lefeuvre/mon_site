
import { useRouter } from "next/navigation";

export default function MenuDeroulant() {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-orange-300 p-4">
      <select
        className="w-full border rounded p-2 text-white bg-orange-500"
        onChange={(e) => router.push(e.target.value)}
      >
        <option value="">changer de page</option>
        <option value="http://localhost:3000/">Accueil</option>
        <option value="/emotions">Les émotions</option>
        <option value="/quiz">Quiz IA</option>
      </select>
    </div>
  );
}




