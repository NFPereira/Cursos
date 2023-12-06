interface Props {
  name: string;
}

const SecoundComponents = (props: Props) => {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é {props.name}</p>
    </div>
  );
};

export default SecoundComponents;
