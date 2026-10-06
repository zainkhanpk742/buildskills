/** Official BuildSkills social profiles (footer links and Organization `sameAs`). */
export const socialProfiles = [
  { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61595362311531" },
  { label: "YouTube", url: "https://www.youtube.com/@buildskillpk" },
] as const;

export const socialUrls: string[] = socialProfiles.map((profile) => profile.url);
