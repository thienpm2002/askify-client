
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const AppButton = ({className, children, ...props}) => {
  return (
    <Button 
      variant='outline' 
      className={cn(
        'bg-blue-600 text-white rounded-sm cursor-pointer', 
        className
        )} 
        {...props}
    >
      {children}
    </Button>
  )
}

export default AppButton