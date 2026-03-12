import SelectTheme from "./_components/SelectTheme";

export default function Preferences() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[800px] mx-auto w-full">
      <div>
        <div className="text-2xl font-semibold">Preferences</div>
        <p className="text-secondary">Set your default preferences</p>
      </div>

      <SelectTheme />
    </div>
  );
}
