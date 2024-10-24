import { useState, useEffect } from "react";
import { uniqueId } from "lodash";
import { FileUpload } from "Shared/Assets/Icons";
import { InputButton, InputText } from "Shared/Components";
import ImageUploadItem from "./ImageUploadItem";


import { createPortal } from "react-dom";

import {
  DropAnimation,
  DragOverlay,
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

interface FileUploadProps {
  max?: number;
}
interface ImagePreview {
  id: number,
  value: string,
}

const ImageUpload = ({ max = 10 }: FileUploadProps) => {
  const inputId = uniqueId("input-checkbox-");
  const [fileArray, setFileArray] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const [URLInputView, setURLInputView] = useState<boolean>(false);
  const [isURLNew, setIsURLNew] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    })
  );

  useEffect(() => {
    const previews = [];
    if (fileArray.length > max) {
    }

    let newID = 0;
    imagePreviews.forEach(item => newID =  item.id > newID ? item.id+1 : newID ); 

    for (let i = 0; i < Math.min(max + 1, fileArray.length); i++) {
      const file = fileArray[i];
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        if (!imagePreviews.map(item => item.value).includes(url)) {
          previews.push({id: newID, value: url});
          newID++;
        }
      }
    }

    setImagePreviews(previews);
  }, [fileArray]);

  function handleDragEnd(event:any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setImagePreviews((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  const handleURLInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let newImagePreviews = [...imagePreviews];

    let newID = 0;
    imagePreviews.forEach(item => newID =  item.id > newID ? item.id+1 : newID );

    if (!isURLNew || newImagePreviews.length === 0) {
      newImagePreviews.push({id: newID, value: e.target.value});
      newID++;
    } else {
      newImagePreviews[newImagePreviews.length - 1].value = e.target.value;
    }

    function checkImageUrl(url: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
        if (img.complete) resolve(true);
      });
    }

    if (await checkImageUrl(newImagePreviews[newImagePreviews.length - 1].value)) {
      setIsURLNew(true);
      setImagePreviews(newImagePreviews);
    }
  };

  const handleURLInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => setURLInputView(false), 150);
    setIsURLNew(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFileArray = [...fileArray, ...Array.from(files)];
      newFileArray.splice(max);
      setFileArray(newFileArray);
    }
    e.target.value = "";
  };

  const handleDeleteImage = (index: number) => {
    const updatedPreviews = [...imagePreviews];
    const newFileArray = [...fileArray];
    updatedPreviews.splice(index, 1);
    newFileArray.splice(index, 1);
    setImagePreviews(updatedPreviews);
    setFileArray(newFileArray);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add("Hovering");
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleMouseLeave(e);
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      const newFileArray = [...fileArray, ...Array.from(files)];
      setFileArray(newFileArray);
    }
  };

  const handleMouseLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("Hovering");
  };

  const getActiveValue = () => {
    const res = imagePreviews.find((item) => item.id === activeId);
    return res?.value;
  };

  return (
    <div
      className="InputImageUpload_Container Flex_Column g-6"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleMouseLeave}
      onDragEnd={handleMouseLeave}
    >
      <span className="Justify_Between">
        <a
          tabIndex={0}
          onClick={() => setURLInputView(true)}
          onFocus={() => setURLInputView(true)}
        >
          Adicionar mídia por URL
        </a>

        <span className="assistant InputChar_Count">
          {fileArray.length}/{max}
        </span>
      </span>

      {URLInputView && (
        <InputText
          onBlur={handleURLInputBlur}
          onChange={handleURLInput}
          name="ImageInputURL"
          placeholder="Ex:: https://www.sitedefotos.com.br/foto_produto.jpg"
        />
      )}

      <input
        type="file"
        id={inputId}
        accept="image/*"
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={({ active }) => {
          if (!active) {
            return;
          }

          setActiveId(active.id);
        }}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={imagePreviews} strategy={rectSortingStrategy}>
          
          <div className="InputImageUpload">
          {fileArray.length >= max ? null : (
              <label htmlFor={inputId}>
                <FileUpload />
                <span>
                  {imagePreviews.length > 0
                    ? `Clique ou \n arraste`
                    : "Arraste as imagens aqui ou clique para selecionar um arquivo no seu computador"}
                </span>
              </label>
            )}
            {imagePreviews.map(({ id, value }) => (
              <ImageUploadItem
                dragged={id === activeId}
                key={id}
                id={id}
                value={value}
              />
            ))}
       
          </div>
        </SortableContext>
        {createPortal(
          <DragOverlay adjustScale={true} dropAnimation={dropAnimation}>
            {activeId ? (
              <ImageUploadItem id={activeId} value={getActiveValue()} />
            ) : null}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
};

export default ImageUpload;
