import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import PrismaClientApp from "@repo/prisma/client"
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;


  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};
export default async function Home() {
  const users = await PrismaClientApp.user.findMany();

  return (
    <div>
      {users.map((obj) => (
        <div key={obj.id}>{obj.name}</div>
      ))}
    </div>
  );
}
