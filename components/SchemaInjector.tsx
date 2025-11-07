
import React from 'react';

interface SchemaInjectorProps {
  schema: object;
}

const SchemaInjector: React.FC<SchemaInjectorProps> = ({ schema }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema, null, 2)}
    </script>
  );
};

export default SchemaInjector;
