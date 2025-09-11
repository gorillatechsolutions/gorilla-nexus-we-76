import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Share2, Copy, Check, Facebook, MessageCircle, Twitter, Linkedin } from 'lucide-react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

interface ShareMenuProps {
  app: {
    id: number;
    name: string;
    description: string;
    category: string;
  };
  onClose: () => void;
}

const ShareMenu: React.FC<ShareMenuProps> = ({ app, onClose }) => {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = `${window.location.origin}/apps/${app.id}`;
  const shareText = `Check out ${app.name} - ${app.category} App: ${app.description}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    onClose();
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const shareToTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, '_blank');
    onClose();
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
    onClose();
  };

  const shareToLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedinUrl, '_blank');
    onClose();
  };

  return (
    <Card className="absolute top-10 right-0 z-50 p-4 w-64 shadow-lg border bg-background/95 backdrop-blur-sm">
      <div className="space-y-2">
        <h4 className="font-semibold text-sm mb-3">Share {app.name}</h4>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={shareToFacebook}
          className="w-full justify-start gap-3 hover:bg-blue-500/10 hover:text-blue-600"
        >
          <Facebook className="h-4 w-4 text-blue-600" />
          Facebook
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={shareToWhatsApp}
          className="w-full justify-start gap-3 hover:bg-green-500/10 hover:text-green-600"
        >
          <FaWhatsapp className="h-4 w-4 text-green-600" />
          WhatsApp
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={shareToTelegram}
          className="w-full justify-start gap-3 hover:bg-sky-500/10 hover:text-sky-600"
        >
          <FaTelegram className="h-4 w-4 text-sky-600" />
          Telegram
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={shareToTwitter}
          className="w-full justify-start gap-3 hover:bg-sky-400/10 hover:text-sky-400"
        >
          <Twitter className="h-4 w-4 text-sky-400" />
          Twitter
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={shareToLinkedIn}
          className="w-full justify-start gap-3 hover:bg-blue-700/10 hover:text-blue-700"
        >
          <Linkedin className="h-4 w-4 text-blue-700" />
          LinkedIn
        </Button>

        <hr className="my-2" />

        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="w-full justify-start gap-3"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ShareMenu;