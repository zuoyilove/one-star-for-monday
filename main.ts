import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday, written as if Monday were a restaurant.
const review =
  "One star. Waited an hour for a table, the waiter served Tuesday's specials, and the bill charged me for the whole weekend. Never again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review + "\n");
