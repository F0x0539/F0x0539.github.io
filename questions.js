const ALL_SKILLS = [
  { label: "Complicate", icon: "icons/Complicate.jpg" },
  { label: "Cry of Frustration", icon: "icons/Cry_of_Frustration.jpg" },
  { label: "Leech Signet", icon: "icons/Leech_Signet.jpg" },
  { label: "Power Block", icon: "icons/Power_Block.jpg" },
  { label: "Power Drain", icon: "icons/Power_Drain.jpg" },
  { label: "Power Leak", icon: "icons/Power_Leak.jpg" },
  { label: "Power Leech", icon: "icons/Power_Leech.jpg" },
  { label: "Power Lock", icon: "icons/Power_Lock.jpg" },
  { label: "Power Spike", icon: "icons/Power_Spike.jpg" },
  { label: "Psychic Instability", icon: "icons/Psychic_Instability.jpg" },
  { label: "Signet of Disruption", icon: "icons/Signet_of_Disruption.jpg" }
];

const QUESTIONS = [
  {
    id: 1,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/complicate_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Complicate"
  },
  {
    id: 2,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/cryoffrustration_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Cry of Frustration"
  },
  {
    id: 3,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/leechsignet_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Leech Signet"
  },
  {
    id: 4,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/pblock_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Block"
  },
  {
    id: 5,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/pdrain_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Drain"
  },
  {
    id: 6,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/pi_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Psychic Instability"
  },
  {
    id: 7,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/pleak_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Leak"
  },
  {
    id: 8,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/pleech_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Leech"
  },
  {
    id: 9,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/plock_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Lock"
  },
  {
    id: 10,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/pspike_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Spike"
  },
  {
    id: 11,
    mode: "audio only",
    prompt: "What skill is used here?",
    src: "media/audio_only/sigofdis_video.m4a",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Signet of Disruption"
  },
  {
    id: 12,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/complicate_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Complicate"
  },
  {
    id: 13,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/cryoffrustration_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Cry of Frustration"
  },
  {
    id: 14,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/leechsignet_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Leech Signet"
  },
  {
    id: 15,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/pblock_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Block"
  },
  {
    id: 16,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/pdrain_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Drain"
  },
  {
    id: 17,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/pi_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Psychic Instability"
  },
  {
    id: 18,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/pleak_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Leak"
  },
  {
    id: 19,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/pleech_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Leech"
  },
  {
    id: 20,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/plock_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Lock"
  },
  {
    id: 21,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/pspike_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Spike"
  },
  {
    id: 22,
    mode: "both",
    prompt: "What skill is used here?",
    src: "media/full_video/sigofdis_video.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Signet of Disruption"
  },
  {
    id: 23,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/complicate_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Complicate"
  },
  {
    id: 24,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/cryoffrustration_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Cry of Frustration"
  },
  {
    id: 25,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/leechsignet_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Leech Signet"
  },
  {
    id: 26,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/pblock_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Block"
  },
  {
    id: 27,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/pdrain_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Drain"
  },
  {
    id: 28,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/pi_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Psychic Instability"
  },
  {
    id: 29,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/pleak_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Leak"
  },
  {
    id: 30,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/pleech_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Leech"
  },
  {
    id: 31,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/plock_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Lock"
  },
  {
    id: 32,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/pspike_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Power Spike"
  },
  {
    id: 33,
    mode: "video only",
    prompt: "What skill is used here?",
    src: "media/muted_video/sigofdis_video_muted.mp4",
    type: "multiple",
    options: ALL_SKILLS,
    answer: "Signet of Disruption"
  }
];