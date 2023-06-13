type ParentComponentProps = {
  name: string;
};

type ChildComponentProps = {
  data: string;
};

export const ParentComponent = (props: ParentComponentProps) => {
  return <ChildComponent data={props.name} />;
};

export const ChildComponent = (props: ChildComponentProps) => {
  return <GrandChildComponent data={props.data} />;
};

export const GrandChildComponent = (props: ChildComponentProps) => {
  return (
    <div>
      <h3>passed all the way donwn</h3>
      <p>{props.data}</p>
    </div>
  );
};
