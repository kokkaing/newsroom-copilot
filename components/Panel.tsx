type PanelProps = {
  title: string
  children?: React.ReactNode
}

export default function Panel({ title, children }: PanelProps) {
  return (
    <section className="bg-white rounded-xl shadow p-6 h-80">
      <h2 className="text-xl font-semibold mb-4">
        {title}
      </h2>

      {children}
    </section>
  )
}