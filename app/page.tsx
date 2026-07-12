import Panel from "@/components/Panel";
import { Story } from "@/types/story";
import { getEarthquakes } from "@/lib/usgs";

const activeStories = await getEarthquakes();

export default async function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Newsroom Copilot
            </h1>

            <p className="text-gray-600">
              AI dashboard for overnight producers
            </p>
          </div>

          <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow">
            🟢 Quiet
          </div>

        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 gap-6">

          {/* Active Stories */}
          <Panel title="Active Stories">
            <div className="space-y-3">

              {activeStories.map((story) => (

                <div
                  key={story.title}
                  className="flex justify-between items-center border-b pb-3"
                >

                  <div>
  <p className="font-medium">{story.title}</p>

  <p className="text-sm text-gray-500">
    {story.category} • {story.location}
  </p>
</div>

                  <span
                    className={`text-white text-sm font-semibold px-3 py-1 rounded-full
                      ${
                        story.priority === "High"
                          ? "bg-red-600"
                          : story.priority === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-600"
                      }
                    `}
                  >
                    {story.priority}
                  </span>

                </div>

              ))}

            </div>
          </Panel>

          {/* Upcoming Events */}
          <Panel title="Upcoming Events">
            <ul className="space-y-3">
              <li>03:00 ET - NASA Launch</li>
              <li>04:00 ET - Hurricane Advisory</li>
              <li>05:00 ET - White House Schedule</li>
            </ul>
          </Panel>

          {/* Video Opportunities */}
          <Panel title="Video Opportunities">
            <ul className="space-y-3">
              <li>📹 Texas flooding aerials</li>
              <li>🚁 CAL FIRE helicopter footage</li>
              <li>🎤 Governor press conference</li>
            </ul>
          </Panel>

          {/* AI Assignment Editor */}
          <Panel title="AI Assignment Editor">
            <div className="space-y-3 text-gray-700">
              <p>
                Good morning.
              </p>

              <p>
                No major national developments at the moment.
              </p>

              <p>
                Monitor severe weather across Oklahoma and Texas over the next
                few hours.
              </p>
            </div>
          </Panel>

        </div>
      </div>
    </main>
  );
}