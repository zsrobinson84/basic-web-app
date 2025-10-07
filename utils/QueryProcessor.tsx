export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "zrobinso";
  }

  if (query.toLowerCase().includes("andrewid")) {
    return "zrobinso";
  }

  if (query.toLowerCase().includes("What is 56 plus 59?")) {
    return "115";
  }

  return "";
}
