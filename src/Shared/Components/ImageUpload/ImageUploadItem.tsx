import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ImageUploadItem = (props:any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="InputImageUpload_Preview"
      style={{ touchAction: "none", ...style }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <img
        src={props.value}
        alt="Teste"
        style={{
          opacity: props.dragged ? 0.3 : 1,
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
        }}
      />
    </div>
  );
}

export default ImageUploadItem;