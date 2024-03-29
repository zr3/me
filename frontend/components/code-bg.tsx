import styles from './code-bg.module.css'

const content = `
#ifndef BASEEXTERNALLIBRARYFEATURE_H
#define BASEEXTERNALLIBRARYFEATURE_H

#include <QAction>
#include <QModelIndex>

#include "library/libraryfeature.h"

class BaseSqlTableModel;
class TrackCollection;

class BaseExternalLibraryFeature : public LibraryFeature {
    Q_OBJECT
  public:
    BaseExternalLibraryFeature(QObject* pParent, TrackCollection* pCollection);
    virtual ~BaseExternalLibraryFeature();

  public slots:
    virtual void onRightClick(const QPoint& globalPos);
    virtual void onRightClickChild(const QPoint& globalPos, QModelIndex index);

  protected:
    // Must be implemented by external Libraries copied to Mixxx DB
    virtual BaseSqlTableModel* getPlaylistModelForPlaylist(QString playlist) {
        Q_UNUSED(playlist);
        return NULL;
    }
    // Must be implemented by external Libraries not copied to Mixxx DB
    virtual void appendTrackIdsFromRightClickIndex(QList<int>* trackIds, QString* pPlaylist);

    QModelIndex m_lastRightClickedIndex;

  private slots:
    void slotAddToAutoDJ();
    void slotAddToAutoDJTop();
    void slotImportAsMixxxPlaylist();

  private:
    void addToAutoDJ(bool bTop);

    TrackCollection* m_pTrackCollection;
    QAction* m_pAddToAutoDJAction;
    QAction* m_pAddToAutoDJTopAction;
    QAction* m_pImportAsMixxxPlaylistAction;
};

#endif // BASEEXTERNALLIBRARYFEATURE_H
`

const CodeBG = () => {
    const lines = content.split('\n').map((line, i) => <p key={`line-${i}`}>{line}</p>)
    return (
        <div className={styles.container}>{lines}</div>
    )
}

export default CodeBG