import React, { useRef } from 'react';
import { Atom, Layers, Clock, Shuffle, Share2, Puzzle, Box, Landmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { ResearchCardProps } from '../types';

const ResearchCard: React.FC<ResearchCardProps & { icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 flex flex-col h-full w-full">
    <div className="mb-6 text-tyrian opacity-80">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-mono">{title}</h3>
    <div className="text-gray-400 leading-relaxed text-sm flex-grow">
      {description}
    </div>
  </div>
);

const ResearchSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 424; // Card width (400) + gap (24)
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-matteBlack py-24 px-0 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
        <div className="mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Distributed Systems &<br /> Cryptoeconomics Research
          </h2>
          <p className="text-tyrian font-mono text-lg">
            Architecting the autonomous protocols of the future.
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 text-white transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 text-white transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Card 1: Intrinsic Liquidity */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <ResearchCard
            title="Intrinsic Liquidity Primitives (ILP)"
            description={
              <div className="space-y-4">
                <p>
                  We engineer tokens with embedded market depth. By fusing a constant-product AMM (<span className="font-mono text-tyrian italic">x · y = k</span>) directly into the smart contract, we create 'Token-Owned Liquidity' that is inseparable from the asset.
                </p>
                <div>
                  <p className="font-semibold text-gray-300 mb-2">This architecture enforces a Monotonic Price Floor:</p>
                  <ul className="list-disc pl-4 space-y-1 marker:text-tyrian">
                    <li><strong className="text-gray-200">Buys</strong> inject capital to 'heal' reserves, raising the floor.</li>
                    <li><strong className="text-gray-200">Sells</strong> burn supply, mathematically increasing the floor-per-token ratio.</li>
                  </ul>
                </div>
                <p>
                  The result is a guaranteed book value that acts as a ratchet—only moving up. This enables <strong className="text-gray-200">Oracle-Free, Zero-Liquidation Loans</strong>, where users can borrow against the intrinsic floor price without risk of volatility-based liquidation.
                </p>
              </div>
            }
            icon={<Atom size={28} />}
          />
        </div>
          
        {/* Card 2: Dual-Phase Bonding Curves */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <ResearchCard
            title="Dual-Phase Bonding Curves"
            description={
              <div className="space-y-4">
                <p>
                  We decouple volatility from solvency using a two-tiered reserve architecture.
                </p>
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-200 block mb-1">The Anchor Phase (<span className="font-mono text-tyrian italic">y = 1</span>):</strong>
                    <span className="text-gray-400">A fixed-price liquidity layer ensures the asset is always redeemable for its reserve backing, establishing a hard floor.</span>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">The Discovery Phase (<span className="font-mono text-tyrian italic">x · y = k</span>):</strong>
                    <span className="text-gray-400">A secondary AMM sits atop the floor to facilitate upside price discovery.</span>
                  </div>
                </div>
                <p>
                  Critically, supply expansion is gated through <strong className="text-gray-200">Collateralized Options</strong>. New tokens can only be minted when users exercise options by depositing fresh reserves, creating a system where inflation is mathematically impossible without corresponding capital inflows.
                </p>
              </div>
            }
            icon={<Layers size={28} />}
          />
        </div>
          
        {/* Card 3: JIT Consensus */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <ResearchCard
            title="Just-In-Time (JIT) Consensus"
            description={
              <div className="space-y-4">
                <p>
                  Replacing energy-intensive Proof-of-Work with <strong className="text-gray-200">Temporal Auction Staking</strong>. Protocol emission rights are allocated via a continuous, high-frequency Dutch Auction.
                </p>
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-200 block mb-1">The Decay:</strong>
                    <span className="text-gray-400">The cost to acquire control rights decays linearly toward zero (<span className="font-mono text-tyrian italic">P(t) → 0</span>) over a fixed epoch.</span>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">The Reset:</strong>
                    <span className="text-gray-400">Upon purchase, the price doubles immediately (<span className="font-mono text-tyrian italic">P<sub>new</sub> = 2 · P<sub>paid</sub></span>), creating a 'Sawtooth' market structure.</span>
                  </div>
                </div>
                <p>
                  This forces participants to competitively price the value of future time-slots, generating continuous protocol revenue while securing fair, non-custodial distribution.
                </p>
              </div>
            }
            icon={<Clock size={28} />}
          />
        </div>

        {/* Card 4: Stochastic Asset Liquidation */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <ResearchCard
            title="Stochastic Asset Liquidation"
            description={
              <div className="space-y-4">
                <p>
                  Transforming illiquid assets (NFTs, RWAs) into productive capital via <strong className="text-gray-200">Probabilistic Market Clearing</strong>.
                </p>
                <div>
                   <p className="font-semibold text-gray-300 mb-2">Unlike traditional binary sales (Sold vs. Unsold), this protocol utilizes Conditional Settlement Logic:</p>
                   <div className="space-y-3">
                      <div>
                        <strong className="text-gray-200 block mb-1">Full Settlement:</strong>
                        <span className="text-gray-400">If liquidity thresholds are met, the asset is algorithmically cleared to a participant via Verifiable Random Function (VRF), often at a premium to the asking price.</span>
                      </div>
                      <div>
                        <strong className="text-gray-200 block mb-1">Partial Settlement Fallback:</strong>
                        <span className="text-gray-400">If demand is insufficient, the smart contract executes a 'Yield-Generate & Return' command. The asset is returned to the owner, while accumulated liquidity is distributed as yield, ensuring capital efficiency even in failed market states.</span>
                      </div>
                   </div>
                </div>
              </div>
            }
            icon={<Shuffle size={28} />}
          />
        </div>

        {/* Card 5: Value-Coupled Social Graphs */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <ResearchCard
            title="Value-Coupled Social Graphs"
            description={
              <div className="space-y-4">
                <p>
                  Synthesizing social signaling with asset solvency. We have developed a <strong className="text-gray-200">Recursive Curation Protocol</strong> where content engagement is not merely a metric, but a liquidity event.
                </p>
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-200 block mb-1">Curation as Injection:</strong>
                    <span className="text-gray-400">When content is 'Collected' (via localized Dutch Auctions), a portion of the settlement is automatically routed to 'Heal' the community token's reserve.</span>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">The Flywheel:</strong>
                    <span className="text-gray-400">This converts subjective human attention into objective financial backing. As cultural relevance increases, the asset's immutable price floor mathematically expands (<span className="font-mono text-tyrian italic">Attention ∝ Liquidity</span>).</span>
                  </div>
                </div>
                <p>
                  This aligns incentives for creators and speculators: content quality directly drives the economic resilience of the underlying asset.
                </p>
              </div>
            }
            icon={<Share2 size={28} />}
          />
        </div>

        {/* Card 6: Generalized Coordination Networks */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <ResearchCard
            title="Generalized Coordination Networks"
            description={
              <div className="space-y-4">
                <p>
                  Decoupling incentive logic from application logic via a <strong className="text-gray-200">Universal Plugin Architecture</strong>.
                </p>
                <div>
                   <p className="font-semibold text-gray-300 mb-2">While traditional 'Gauge' systems are hardcoded for specific tasks (e.g., liquidity provision), our protocol creates a permissionless marketplace for arbitrary digital labor:</p>
                   <div className="space-y-3">
                      <div>
                        <strong className="text-gray-200 block mb-1">The Plugin Standard:</strong>
                        <span className="text-gray-400">A modular smart contract interface that defines specific 'Work' criteria and 'Revenue' routing.</span>
                      </div>
                      <div>
                        <strong className="text-gray-200 block mb-1">Outcome-Based Emission:</strong>
                        <span className="text-gray-400">Governance stakers direct capital flows (emissions) to the most productive Plugins based on real-time revenue verification.</span>
                      </div>
                   </div>
                </div>
                <p>
                  This allows a single consensus network to simultaneously coordinate diverse resources—from DeFi liquidity to biological computation or autonomous agent tasks—without protocol upgrades.
                </p>
              </div>
            }
            icon={<Puzzle size={28} />}
          />
        </div>

        {/* Card 7: Domain-Specific Verification Engines */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <ResearchCard
            title="Domain-Specific Verification Engines"
            description={
              <div className="space-y-4">
                <p>
                  Moving beyond monolithic 'Proof-of-Work,' we engineer <strong className="text-gray-200">Isolated Consensus Environments</strong> tailored to distinct human competencies.
                </p>
                <div>
                   <p className="font-semibold text-gray-300 mb-2">Rather than a shared ledger for all activity, we deploy application-specific econometrics:</p>
                   <div className="space-y-3">
                      <div>
                        <strong className="text-gray-200 block mb-1">Semantic Verification:</strong>
                        <span className="text-gray-400">Algorithms that quantify and reward creative output (Proof-of-Creativity).</span>
                      </div>
                      <div>
                        <strong className="text-gray-200 block mb-1">Cognitive Proofs:</strong>
                        <span className="text-gray-400">Incentive models driven by logic puzzles and problem-solving (Proof-of-Intelligence).</span>
                      </div>
                      <div>
                        <strong className="text-gray-200 block mb-1">Altruistic Allocation:</strong>
                        <span className="text-gray-400">Systems where token emission is strictly coupled to verified charitable giving.</span>
                      </div>
                   </div>
                </div>
                <p>
                  By isolating these incentive loops, we prevent inflationary contagion and ensure that digital rewards are strictly backed by the specific domain of work performed.
                </p>
              </div>
            }
            icon={<Box size={28} />}
          />
        </div>

        {/* Card 8: Autonomous Capital Formation */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <ResearchCard
            title="Autonomous Capital Formation"
            description={
              <div className="space-y-4">
                <p>
                  Inverting the traditional inflationary model via <strong className="text-gray-200">Recursive Asset Accumulation</strong>.
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Instead of distributing emissions to rent temporary liquidity, our protocol streams capital into <strong>Modular Microfunds</strong>—specialized vaults that autonomously acquire yield-bearing assets via continuous Dutch Auctions.</span>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Closed-Loop Compounding:</strong>
                    <span className="text-gray-400">Yield generated by these assets is programmatically recycled to buy back and burn the native token.</span>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Result:</strong>
                    <span className="text-gray-400">A deflationary feedback loop where every emission event results in a permanent increase in the protocol's Treasury-Book-Value (<span className="font-mono text-tyrian italic">TBV ↑</span>).</span>
                  </div>
                </div>
              </div>
            }
            icon={<Landmark size={28} />}
          />
        </div>
        
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm font-mono italic px-6">
        "The future belongs to those who build it."
      </div>
    </section>
  );
};

export default ResearchSection;