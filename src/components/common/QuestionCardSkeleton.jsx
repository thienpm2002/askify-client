import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const QuestionCardSkeleton = () => {
  return (
    <Card className="w-full mt-4 max-w-4xl">
      <CardContent>
        <Skeleton className="h-4 w-1/2" />
        <div className="my-4">
          <Skeleton className="h-4 w-2/3 mb-2" />
          <Skeleton className="aspect-video h-32 w-full" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-1/5 mt-2" />
          <Skeleton className="h-4 w-1/5 mt-2" />
        </div>
      </CardContent>
    </Card>
  )
}

export default QuestionCardSkeleton
