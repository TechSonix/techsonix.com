import PolicyLayout, { type PolicySection } from "./PolicyLayout";
export type { PolicySection } from "./PolicyLayout";
export default function EpixPolicyLayout(props: {
  title: string;
  intro: string;
  sections: PolicySection[];
}) {
  return (
    <PolicyLayout
      {...props}
      backHref="/epixnet/"
      backLabel="EpixNet"
      supportHref="/epixnet/support/"
    />
  );
}
