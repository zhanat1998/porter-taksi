import { client } from '@/app/sanity/lib/client'
import { WORKERS_BY_SERVICE_QUERY } from '@/app/sanity/lib/queries'
import WorkerCard, { Worker } from '@/app/components/WorkerCard'

async function getWorkers(): Promise<Worker[]> {
  return client.fetch(WORKERS_BY_SERVICE_QUERY, { serviceType: 'garbage' })
}

export default async function GarbagePage() {
  const workers = await getWorkers()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Workers List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-800">
              Мусор чыгаруу - Бишкек {workers.length > 0 && `(${workers.length} айдоочу)`}
            </h1>
          </div>

          {/* Workers Cards */}
          {workers.length > 0 ? (
            <div className="space-y-4 max-w-4xl">
              {workers.map((worker) => (
                <WorkerCard key={worker._id} worker={worker} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Жумушчулар жакында кошулат...
              </p>
            </div>
          )}

          {/* More Coming */}
          {workers.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-500">
                Көбүрөөк айдоочулар жакында кошулат...
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}