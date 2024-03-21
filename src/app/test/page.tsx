import CSS from 'csstype';

const gridStyle: CSS.Properties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap: '10px',
    gridRowGap: "10px" 
};

const gridItemStyle: CSS.Properties = { gridArea: "1 / 1 / 6 / 6" };

export default function Page() {
  return (
    <>
      <div style={gridStyle}>
        <div style={gridItemStyle}> </div>
      </div>
    </>
  );
}
