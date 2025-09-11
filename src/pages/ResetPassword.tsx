import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiMail, FiArrowLeft, FiCheck } from 'react-icons/fi';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Reset Password - Gorilla Tech Solution</title>
        <meta name="description" content="Reset your Gorilla Tech Solution account password. Enter your email to receive password reset instructions." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="/reset-password" />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">
                    {isSubmitted ? 'Check Your Email' : 'Reset Password'}
                  </CardTitle>
                  <CardDescription>
                    {isSubmitted
                      ? 'We\'ve sent password reset instructions to your email'
                      : 'Enter your email address and we\'ll send you a link to reset your password'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="space-y-4">
                      <Alert>
                        <FiCheck className="h-4 w-4" />
                        <AlertDescription>
                          Password reset instructions have been sent to <strong>{email}</strong>.
                          Please check your inbox and follow the instructions to reset your password.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="text-center space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Didn't receive the email? Check your spam folder or try again.
                        </p>
                        
                        <Button
                          variant="outline"
                          onClick={() => setIsSubmitted(false)}
                          className="w-full"
                        >
                          Try Different Email
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <FiMail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="pl-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Reset Instructions'}
                      </Button>
                    </form>
                  )}

                  <div className="mt-6 text-center">
                    <Link
                      to="/signin"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      <FiArrowLeft className="mr-2 h-4 w-4" />
                      Back to Sign In
                    </Link>
                  </div>

                  {!isSubmitted && (
                    <div className="mt-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-primary hover:underline">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResetPassword;