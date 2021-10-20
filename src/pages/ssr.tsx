import { GetServerSideProps, NextPage } from "next";

interface SSRProps {
  numbers: number;
}

const SSR: NextPage<SSRProps> = ({numbers}: SSRProps) => {
  return (
    <div>
      Here is the number {numbers ? numbers : "Number not found"}
    </div>
  )
}

export default SSR;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      numbers: Math.random() * 100
    }
  }
}