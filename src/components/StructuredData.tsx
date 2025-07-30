// File: src/components/StructuredData.tsx
import { FC } from 'react';

interface StructuredDataProps {
  data: object | object[];
}

const StructuredData: FC<StructuredDataProps> = ({ data }) => {
  const schemas = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0)
          }}
        />
      ))}
    </>
  );
};

export default StructuredData;
