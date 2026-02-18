import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

const signupCtaSchema = z.object({
  company_name: z.string().min(1, 'Company name is required'),
  admin_contact: z
    .string()
    .min(1, 'Admin contact is required')
    .email('Enter a valid email'),
})

export type SignupCTAFormValues = z.infer<typeof signupCtaSchema>

interface SignupCTAProps {
  onSubmit?: (data: SignupCTAFormValues) => void | Promise<void>
  className?: string
}

export function SignupCTA({ onSubmit, className }: SignupCTAProps) {
  const [expanded, setExpanded] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupCTAFormValues>({
    resolver: zodResolver(signupCtaSchema),
  })

  const handleFormSubmit = async (data: SignupCTAFormValues) => {
    await onSubmit?.(data)
  }

  return (
    <Card
      className={cn(
        'animate-fade-in-up transition-shadow duration-300 hover:shadow-card-hover',
        className
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">New to Choose & Build?</CardTitle>
        <CardDescription>
          Start your firm sign-up with company name and admin contact.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!expanded ? (
          <Button
            type="button"
            variant="secondary"
            className="w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => setExpanded(true)}
          >
            Firm sign-up
          </Button>
        ) : (
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-4"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="signup-company">Company name</Label>
              <Input
                id="signup-company"
                placeholder="Acme Architecture"
                {...register('company_name')}
                className={cn(errors.company_name && 'border-destructive')}
                aria-invalid={!!errors.company_name}
              />
              {errors.company_name && (
                <p className="text-sm text-destructive">
                  {errors.company_name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-admin">Admin contact (email)</Label>
              <Input
                id="signup-admin"
                type="email"
                placeholder="admin@firm.com"
                {...register('admin_contact')}
                className={cn(errors.admin_contact && 'border-destructive')}
                aria-invalid={!!errors.admin_contact}
              />
              {errors.admin_contact && (
                <p className="text-sm text-destructive">
                  {errors.admin_contact.message}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setExpanded(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
