// Components
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Container from "@/components/ui/container";

// Types
import { LayoutChildrenProps } from "@/types";

export const Layout = ({ children }: LayoutChildrenProps) => {
  return (

    <Container>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 m-auto py-5 w-full flex-grow">{children}</div>
      </div>
      <Footer />
    </Container>

  )
};