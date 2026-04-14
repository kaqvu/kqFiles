import { Metadata } from "next"
import { InfoContent } from "@/components/info-content"

export const metadata: Metadata = {
  title: "Info | kq",
  description: "Learn more about kaqvu and this portfolio.",
}

export default function InfoPage() {
  return (
    <div className="pt-24 md:pt-32">
      <InfoContent />
    </div>
  )
}
