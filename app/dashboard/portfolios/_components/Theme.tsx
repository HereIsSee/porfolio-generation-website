import Card from "@/components/ui/Card";

export default function Theme() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <h2 className="text-lg font-medium">Theme Selection</h2>
        <p className="text-sm text-secondary">
          Theme editing will most likely be done in the actual virtualization of
          the page and not in this page maybe what the user can do here is
          select a theme while the nitty gritty details about the style of the
          website will be done in the actual virtualization of the page.
        </p>
      </Card>
    </div>
  );
}
