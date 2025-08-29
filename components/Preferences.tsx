// components/Preferences.tsx
import { Checkbox } from "@/components/ui/checkbox";

export default function Preferences() {
  return (
    <div className="flex items-center space-x-2 px-11 sm:px-27 py-14 sm:py-14 text-black font-extralight">
      <Checkbox id="terms" className="w-5 h-5 border border-gray-400" /> {/* ✅ Bigger checkbox */}
      <label
        htmlFor="terms"
        className="text-sm text-gray-800 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I'm looking for flights
      </label>
    </div>
  );
}
