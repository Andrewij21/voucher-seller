export default function dateFormater(value: Date): string {
  return new Date(value)
    .toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", " :")
    .replace("pukul", ""); // Mengganti koma default dengan " :"
}
