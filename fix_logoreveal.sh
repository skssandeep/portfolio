sed -i '' 's/return () => ctx.revert();/return () => { setTimeout(() => ctx.revert(), 100); };/' src/components/ui/LogoReveal.tsx
