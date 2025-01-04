import React, { useState } from 'react';
import { Link as LinkIcon, Plus, Trash2 } from 'lucide-react';

interface LinkManagerProps {
  links: string[];
  onChange: (links: string[]) => void;
}

export function LinkManager({ links, onChange }: LinkManagerProps) {
  const [newLink, setNewLink] = useState('');

  const handleAddLink = () => {
    if (newLink && isValidUrl(newLink)) {
      onChange([...links, newLink]);
      setNewLink('');
    }
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    onChange(updatedLinks);
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="url"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          placeholder="Enter URL"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          onClick={handleAddLink}
          className="p-2 text-blue-500 hover:text-blue-600"
          title="Add link"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            <LinkIcon className="w-4 h-4 text-gray-500" />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-blue-500 hover:underline truncate"
            >
              {link}
            </a>
            <button
              onClick={() => handleRemoveLink(index)}
              className="p-1 text-red-500 hover:text-red-600"
              title="Remove link"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}