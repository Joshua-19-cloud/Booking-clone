// components/Preferences.tsx
import { Checkbox } from "@/components/ui/checkbox";

export default function Preferences() {
  return (
    <div className="flex items-center space-x-2 px-11 py-18 text-black font-extrathin">
  <Checkbox id="terms" className="w-5 h-5 border border-gray-450" /> {/* ✅ Bigger checkbox */}
  <label
    htmlFor="terms"
    className="text-sm text-gray-800 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    I'm looking for flights
  </label>
</div>
  );
}
