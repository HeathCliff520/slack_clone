import { FcGoogle } from "react-icons/fc"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"


export const SignInCard = () => {
    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle >
                    Login to containue
                </CardTitle>
                <CardDescription>
                    use you email or anther service to containue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className=" space-y-2.5">
                    <Input 
                        disabled={false}
                        value=""
                        onChange={()=>{}}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input 
                        disabled={false}
                        value=""
                        onChange={()=>{}}
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <Button type="submit" className="w-full" size='lg' disabled={false}>
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button 
                        disabled={false}
                        onClick={()=>{}}
                        variant='outline'
                        size='lg'
                        className="w-full relative rounded-lg"
                    >
                        <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
                        Continue with Google
                    </Button>
                    <Button 
                        disabled={false}
                        onClick={()=>{}}
                        variant='outline'
                        size='lg'
                        className="w-full relative rounded-lg"
                    >
                        <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
                        Continue with Github
                    </Button>
                </div>
                {/* 没有账户跳转创建页面 */}
                <p className="text-xs text-muted-foreground">
                    Don&apos;t have an account? <span className="text-sky-700 hover:underline cursor-pointer">Sign Up</span>
                </p>

            </CardContent>
        </Card>
    )
}